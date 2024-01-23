import { connectToDb } from "@/lib/connectToDb"
import { postmodel } from "@/lib/models"
import { NextResponse } from "next/server"

export  const GET = async(req,{params})=>{
    const {slug} = params
    try {
        connectToDb()
     
        const postsall = await postmodel.findOne({slug})
        return NextResponse.json(postsall)
        
    } catch (error) {
        console.log(error)
    }
}
export  const DELETE = async(req,{params})=>{
    const {slug} = params
    try {
        connectToDb()
     
        await postmodel.deleteOne({slug})
        return NextResponse.json("POST DELETE")
        
    } catch (error) {
        console.log(error)
    }
}