"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Video, Play, Clock, User } from "lucide-react"
import Link from "next/link"

const resourceData = {
  articles: [
    {
      id: 1,
      title: "Understanding Anxiety in College Students",
      description: "Learn about common anxiety symptoms and effective coping strategies for academic stress.",
      readTime: "8 min read",
      category: "Anxiety",
      language: "en",
      author: "Dr. Priya Sharma",
    },
    {
      id: 2,
      title: "Sleep Hygiene for Better Mental Health",
      description: "Discover how proper sleep habits can significantly improve your mental well-being.",
      readTime: "6 min read",
      category: "Sleep",
      language: "en",
      author: "Dr. Rajesh Kumar",
    },
    {
      id: 3,
      title: "Managing Academic Pressure",
      description: "Practical strategies to handle study stress and maintain work-life balance.",
      readTime: "10 min read",
      category: "Stress",
      language: "en",
      author: "Dr. Anita Desai",
    },
    {
      id: 4,
      title: "छात्र जीवन में तनाव प्रबंधन",
      description: "छात्र जीवन के दौरान तनाव को कम करने के प्रभावी तरीके जानें।",
      readTime: "7 मिनट",
      category: "तनाव",
      language: "hi",
      author: "डॉ. सुनीता गुप्ता",
    },
  ],
  videos: [
    {
      id: 1,
      title: "5-Minute Breathing Exercise for Anxiety",
      description: "A guided breathing exercise to help calm anxiety and reduce stress.",
      duration: "5:23",
      category: "Breathing",
      thumbnail: "/placeholder-acki5.png",
    },
    {
      id: 2,
      title: "Progressive Muscle Relaxation",
      description: "Learn to release physical tension and promote mental relaxation.",
      duration: "12:45",
      category: "Relaxation",
      thumbnail: "/placeholder-tpc8x.png",
    },
    {
      id: 3,
      title: "Mindfulness for Students",
      description: "Introduction to mindfulness practices specifically designed for student life.",
      duration: "8:30",
      category: "Mindfulness",
      thumbnail: "/placeholder-a8yav.png",
    },
  ],
  faqs: [
    {
      question: "Is it normal to feel anxious about exams?",
      answer:
        "Yes, exam anxiety is very common among students. It's a normal response to academic pressure. However, if anxiety becomes overwhelming or interferes with your daily life, it's important to seek support.",
      category: "Anxiety",
    },
    {
      question: "How do I know if I need professional help?",
      answer:
        "Consider seeking professional help if you experience persistent sadness, anxiety, sleep problems, difficulty concentrating, or thoughts of self-harm. Our screening tools can help you assess your mental health.",
      category: "General",
    },
    {
      question: "Are the counseling sessions really confidential?",
      answer:
        "Absolutely. All counseling sessions are completely confidential. We use anonymous IDs and encrypted communication to protect your privacy.",
      category: "Privacy",
    },
  ],
}

export function ResourceCategories() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="space-y-8">
      {/* Quick Access to Screening Tools */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Mental Health Self-Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Take scientifically validated assessments to better understand your mental health status.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/screening/phq9">PHQ-9 Depression Screening</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/screening/gad7">GAD-7 Anxiety Assessment</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/screening/ghq">GHQ General Health</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Resource Tabs */}
      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceData.articles.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary">{article.category}</Badge>
                    <Badge variant="outline">{article.language === "en" ? "EN" : article.language.toUpperCase()}</Badge>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{article.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceData.videos.map((video) => (
              <Card key={video.id} className="hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <Badge className="absolute top-2 right-2">{video.duration}</Badge>
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {video.category}
                  </Badge>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                  <Button className="w-full">
                    <Video className="w-4 h-4 mr-2" />
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="faqs" className="space-y-6">
          <div className="space-y-4">
            {resourceData.faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <Badge variant="outline">{faq.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
