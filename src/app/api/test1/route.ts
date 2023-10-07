import db from "@/app/db/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let res: any = { message: "SUCCESS" };

  const data = db.prepare('SELECT * FROM users').all();
  
  console.log("data1",data)
  //res.status(200).json(data);

  // const tmpPageNumber: any = searchParams.get("page-number");
//   const projectid: any = searchParams.get("projectid");
//   const staffid: any = searchParams.get("staffid");

  // const currentPage: any = parseInt(tmpPageNumber);

  // const postsPerPage = 10; // Number of posts per page
  // const offset = (currentPage - 1) * postsPerPage;

  try {
    
  } catch (error) {
    console.error("Error adding project assign", error);
    res = { message: "ERROR" };
  }

  return NextResponse.json(data);
}