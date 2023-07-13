import { Client } from '@notionhq/client';
import { PostMetadata } from "./PostMetadata"
import { parse } from 'date-fns';
import { NotionToMarkdown } from "notion-to-md"
import { ProjectMetadata } from './ProjectMetada';
import { ModuleMetaData } from './ModuleMetadata';
// create the notion Client
const client = new Client({
    auth: process.env.NOTION_KEY,
});
const n2m = new NotionToMarkdown({
    notionClient: client
})
// Get All published Posts
async function getPosts(): Promise<PostMetadata[]> {

    try {
        let myPosts = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE}`,
            filter: {
                property: "Status",
                select: {
                    equals: "Published"
                }
            }
        });
        return myPosts.results.map(page => pageTOpost(page))
    } catch (error) {
        console.log(error)
        return []
    }

}
//get a POST by ..

async function getPost(id: string) {

    try {
        let myPosts = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE}`,
            filter: {
                property: "link",
                formula: {
                    string: {
                        equals: id
                    }

                }
            }
        });

        if (!myPosts.results[0]) {
            throw "no results found"
        }

        const page = await n2m.pageToMarkdown((myPosts.results[0].id))
        const markdown = n2m.toMarkdownString(page)
        const post = pageTOpost(myPosts.results[0])
        return {
            post, markdown
        }

    } catch (error) {
        console.log(error)
        return null
    }

}

const pageTOpost = (page: any): PostMetadata => {
    return {
        id: page.id,
        title: page.properties.Title.title[0].plain_text,
        createdAt: stringToDate(page.last_edited_time),
        category: page.properties.Category.multi_select[0].name,
        intention: page.properties.Intention.select.name,
        description: page.properties.description.rich_text[0].plain_text,
        link: page.properties.link.rich_text[0].plain_text
    }
}

const stringToDate = (date: string): string => {
    const dateDate = parse(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", new Date());
    return dateDate.toUTCString()
}

const pageTproject = (page: any): ProjectMetadata => {
    return {
        id: page.id,
        status: page.properties.Status.select.name,
        title: page.properties.Title.title[0].plain_text,
        category: page.properties.Categorie.select.name,
        description: page.properties.Description.rich_text[0].plain_text,
        github: page.properties.Github.url
    }
}
// Get All published Posts
async function getProjects(): Promise<ProjectMetadata[]> {

    try {
        let myProjects = await client.databases.query({
            database_id: `${process.env.PROJECTS_DATABASE}`,
        });

        return myProjects.results.map(page => pageTproject(page))
    } catch (error) {
        console.log(error)
        return []
    }

}
const pageToCourses = (page: any): ModuleMetaData => {
    return {
        id: page.id,
        title: page.properties.Nom.title[0].plain_text,
        createdAt: stringToDate(page.created_time),
        categories: page.properties.Categories.multi_select.map((a: any)=>a.name),
        image: page.properties.Image.files[0].file.url,
        description: page.properties.Description.rich_text[0].plain_text

    } 
}
async function getCourses() {

    try {
        let myCourse = await client.databases.query({
            database_id: `${process.env.MODULE_DATABASE}`,
            filter: {
                property: "Status",
                select: {
                    equals: "Published"
                }
            }
         
        });
        
       return myCourse.results.map(page => pageToCourses(page))
    } catch (error) {
        console.log(error)
        return []
    }

}
export {
    getPosts,
    getPost,
    getProjects,
    getCourses
}