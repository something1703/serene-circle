"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Clock, User } from "lucide-react"

interface ArticleModalProps {
  isOpen: boolean
  onClose: () => void
  article: {
    title: string
    content: string
    author: string
    readTime: string
    category: string
  } | null
}

export function ArticleModal({ isOpen, onClose, article }: ArticleModalProps) {
  if (!article) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-balance">{article.title}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="prose prose-sm max-w-none text-foreground">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
