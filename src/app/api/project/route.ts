import { NextResponse } from "next/server";
import database from "@/lib/database";

export async function GET(req: NextResponse) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        
        if (id && id !== "") {
            return NextResponse.json({
                data: database.projects?.filter((item) => item.id === id)[0],
            }, {
                status: 200,
            })
        }

        return NextResponse.json({
            data: [],
        }, {
            status: 200,
        })
    } catch (error) {
        console.log('project get error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to fetch data.'
        }, {
            status: 500,
        })
    }
}
