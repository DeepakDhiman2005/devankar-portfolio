import { NextResponse, NextRequest } from "next/server"; // ✅ Import NextRequest
import database from "@/lib/database";

export async function GET(req: NextRequest) { // ✅ Use NextRequest here
    try {
        const { searchParams } = new URL(req.url); // ✅ Extract search params
        const id = searchParams.get('id');
        
        if (id && id !== "") {
            return NextResponse.json({
                data: database.projects?.find((item) => item.id === id), // ✅ Use find() for efficiency
            }, {
                status: 200,
            });
        }

        return NextResponse.json({
            data: [],
        }, {
            status: 200,
        });
    } catch (error) {
        console.error('project get error:', error); // ✅ Use console.error for better visibility
        return NextResponse.json({
            success: false,
            error: 'Failed to fetch data.'
        }, {
            status: 500,
        });
    }
}
