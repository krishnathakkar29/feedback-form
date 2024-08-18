import NewProject from "@/components/NewProject";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import ProjectsList from "./ProjectsList";
import { eq } from "drizzle-orm";

type Props = {};

const page = async (props: Props) => {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }
  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId));

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
        <NewProject />
      </div>
      <ProjectsList projects={userProjects} />
      
    </div>
  );
};

export default page;
