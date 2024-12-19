import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getTasks = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1; // Default to page 1
  const limit = parseInt(req.query.limit as string) || 10; // Default to 10 tasks per page
  const skip = (page - 1) * limit;

  try {
    const tasks = await prisma.task.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc", // Sort by most recent tasks first
      },
    });

    const totalTasks = await prisma.task.count(); // Get total task count

    res.json({
      tasks,
      totalPages: Math.ceil(totalTasks / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching tasks with pagination:", error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, color } = req.body;
  const newTask = await prisma.task.create({
    data: { title, color, completed: false },
  });
  res.json(newTask);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  const updatedTask = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, color, completed },
  });
  res.json(updatedTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.json({ message: "Task deleted successfully" });
};
