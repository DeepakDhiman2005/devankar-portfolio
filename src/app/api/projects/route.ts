import { NextResponse } from "next/server";
import database from "@/lib/database";

export async function GET() {
    try {
        return NextResponse.json({
            data: database,
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
