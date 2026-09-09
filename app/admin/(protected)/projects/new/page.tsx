import { ProjectForm } from "@/components/admin/project-form";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl font-medium text-white">Nuevo proyecto</h1>
      <div className="mt-8 max-w-2xl">
        <ProjectForm />
      </div>
    </div>
  );
}
