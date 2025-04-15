
import { Sidebar } from "@/components/sidebar";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences and application settings.</p>
          </div>
          
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-center">
              <h2 className="text-2xl font-medium mb-2">Settings Page</h2>
              <p className="text-muted-foreground">This page will allow you to customize your experience.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
