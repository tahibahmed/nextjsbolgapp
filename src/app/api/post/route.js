import { connectToDb } from "@/lib/connectToDb"
import { postmodel } from "@/lib/models"
import { NextResponse } from "next/server"

export  const GET = async(req,res)=>{
    try {
        connectToDb()
        const postsall = await postmodel.find()
        return NextResponse.json(postsall)
        
    } catch (error) {
        console.log(error)
    }
}