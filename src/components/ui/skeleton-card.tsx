import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
  lines?: number;
  showImage?: boolean;
}

export function SkeletonCard({ className, lines = 3, showImage = false }: SkeletonCardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-6 shadow-sm", className)}>
      {showImage && (
        <div className="mb-4 h-32 w-full animate-pulse rounded-md bg-muted" />
      )}
      <div className="space-y-3">
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-3 animate-pulse rounded bg-muted"
            style={{ width: `${100 - i * 15}%`, animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

interface SkeletonTableProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export function SkeletonTable({ rows = 5, columns = 4, className }: SkeletonTableProps) {
  return (
    <div className={cn("rounded-lg border bg-card", className)}>
      {/* Header */}
      <div className="flex gap-4 border-b p-4">
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            className="h-4 flex-1 animate-pulse rounded bg-muted"
            style={{ animationDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-4 border-b p-4 last:border-b-0"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className="h-4 flex-1 animate-pulse rounded bg-muted"
              style={{ animationDelay: `${(rowIndex * columns + colIndex) * 30}ms` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

interface SkeletonStatsProps {
  count?: number;
  className?: string;
}

export function SkeletonStats({ count = 4, className }: SkeletonStatsProps) {
  return (
    <div className={cn("grid gap-4", className)} style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border bg-card p-6"
        >
          <div
            className="mb-2 h-3 w-20 animate-pulse rounded bg-muted"
            style={{ animationDelay: `${i * 100}ms` }}
          />
          <div
            className="h-8 w-16 animate-pulse rounded bg-muted"
            style={{ animationDelay: `${i * 100 + 50}ms` }}
          />
        </div>
      ))}
    </div>
  );
}
