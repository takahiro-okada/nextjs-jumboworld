import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import type { Work } from "@/app/_libs/microcms";
import Tag from "@/app/_components/elements/Tag";

type WorkModalProps = {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function WorkModal({ work, isOpen, onClose }: WorkModalProps) {
  if (!work) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-bold">{work.title}</DialogTitle>
          <DialogDescription>
            <Tag tag={work.category} />
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          {work.thumbnail && work.thumbnail.url && (
            <Image
              src={work.thumbnail.url}
              alt={work.title}
              width={work.thumbnail.width}
              height={work.thumbnail.height}
              className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 ease-in-out"
            />
          )}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: work.content || "" }}
          />
          {work.url && (
            <div className="pt-4">
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                View Project
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
