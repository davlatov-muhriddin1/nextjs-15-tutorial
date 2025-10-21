"use client";

import { handleSubmission } from "@/app/actions";
import SubmitButton from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogRoute() {
  return (
    <Card className="max-w-lg mx-auto mt-5">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>
          Create a new post to share with the world
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" action={handleSubmission}>
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input name="title" type="text" placeholder="Title" required />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Content</Label>
            <Textarea name="content" placeholder="Content" required></Textarea>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Image URL</Label>
            <Input name="url" type="url" placeholder="Image URL" required />
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
