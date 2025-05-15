import asyncHandler from "../utils/asyncHandler.js";
import prisma from "../lib/prisma.js";
export const getModels = asyncHandler(async () => {
    try {
        const results = await prisma.model.findMany({
            take: 10,
        });
    }
    catch (error) {
    }
});
