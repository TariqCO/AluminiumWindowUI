"use client";

import { Loader2 } from "lucide-react"; 

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-muted-foreground text-sm">Loading, please wait...</p>
      </div>
    </div>
  );
}
