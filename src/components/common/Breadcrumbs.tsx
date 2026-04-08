import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-4 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ol className="flex items-center flex-wrap gap-y-1">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li
                key={`${item.href}-${i}`}
                className="flex items-center gap-1.5"
              >
                {i > 0 && (
                  <FiChevronRight
                    size={11}
                    className="text-gray-400 shrink-0 mx-0.5"
                  />
                )}
                {isLast ? (
                  <span
                    className="text-sm text-gray-500 font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
