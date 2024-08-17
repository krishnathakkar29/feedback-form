import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import React from "react";

type Props = {
  params: {
    projectId: string;
  };
};

const paget = async ({ params: { projectId } }: Props) => {
  const project = await db.query.projects.findMany({
    where: eq(projects.id, parseInt(projectId)),
  });
  return <div>paget</div>;
};

export default paget;
