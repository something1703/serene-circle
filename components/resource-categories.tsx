"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Video, Play, Clock, User } from "lucide-react"
import Link from "next/link"
import { ArticleModal } from "./article-modal"

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

const fullArticleContent = {
  1: `
    <h2>Understanding Anxiety in College Students</h2>
    <p>Anxiety is one of the most common mental health challenges faced by college students today. With academic pressures, social expectations, and the transition to independence, it's no wonder that many students experience anxiety symptoms.</p>
    
    <h3>Common Signs of Anxiety</h3>
    <ul>
      <li>Persistent worry about academic performance</li>
      <li>Physical symptoms like rapid heartbeat or sweating</li>
      <li>Difficulty concentrating during lectures or exams</li>
      <li>Avoidance of social situations or activities</li>
      <li>Sleep disturbances or changes in appetite</li>
    </ul>
    
    <h3>Effective Coping Strategies</h3>
    <p>Here are some evidence-based techniques to manage anxiety:</p>
    <ol>
      <li><strong>Deep Breathing:</strong> Practice 4-7-8 breathing technique daily</li>
      <li><strong>Time Management:</strong> Break large tasks into smaller, manageable steps</li>
      <li><strong>Regular Exercise:</strong> Even 20 minutes of walking can reduce anxiety</li>
      <li><strong>Mindfulness:</strong> Use meditation apps or guided exercises</li>
      <li><strong>Social Support:</strong> Connect with friends, family, or counselors</li>
    </ol>
    
    <h3>When to Seek Help</h3>
    <p>If anxiety interferes with your daily activities, academic performance, or relationships, it's important to seek professional help. Our platform offers confidential counseling and screening tools to help you assess your mental health.</p>
  `,
  2: `
    <h2>Sleep Hygiene for Better Mental Health</h2>
    <p>Quality sleep is fundamental to mental health and academic success. Poor sleep can worsen anxiety, depression, and stress levels, creating a cycle that's hard to break.</p>
    
    <h3>The Sleep-Mental Health Connection</h3>
    <p>Research shows that sleep and mental health are closely linked. When we don't get enough quality sleep:</p>
    <ul>
      <li>Our ability to regulate emotions decreases</li>
      <li>Stress hormones like cortisol increase</li>
      <li>Concentration and memory suffer</li>
      <li>Risk of anxiety and depression increases</li>
    </ul>
    
    <h3>Essential Sleep Hygiene Tips</h3>
    <ol>
      <li><strong>Consistent Schedule:</strong> Go to bed and wake up at the same time daily</li>
      <li><strong>Create a Sleep Sanctuary:</strong> Keep your room cool, dark, and quiet</li>
      <li><strong>Digital Detox:</strong> Avoid screens 1 hour before bedtime</li>
      <li><strong>Relaxation Routine:</strong> Try reading, gentle stretching, or meditation</li>
      <li><strong>Watch Your Diet:</strong> Avoid caffeine and heavy meals before bed</li>
    </ol>
    
    <h3>Building Better Sleep Habits</h3>
    <p>Start with small changes and be patient with yourself. It can take 2-3 weeks to establish new sleep patterns. Track your sleep using our Mind Garden dashboard to monitor your progress.</p>
  `,
  3: `
    <h2>Managing Academic Pressure</h2>
    <p>Academic pressure is a significant source of stress for college students. Learning to manage this pressure effectively is crucial for both academic success and mental well-being.</p>
    
    <h3>Understanding Academic Stress</h3>
    <p>Academic stress can manifest in various ways:</p>
    <ul>
      <li>Overwhelming workload and deadlines</li>
      <li>Fear of failure or disappointing others</li>
      <li>Competition with peers</li>
      <li>Uncertainty about future career prospects</li>
      <li>Financial pressures related to education</li>
    </ul>
    
    <h3>Practical Stress Management Strategies</h3>
    <ol>
      <li><strong>Prioritization:</strong> Use the Eisenhower Matrix to categorize tasks</li>
      <li><strong>Time Blocking:</strong> Allocate specific time slots for different subjects</li>
      <li><strong>Regular Breaks:</strong> Follow the Pomodoro Technique (25 min work, 5 min break)</li>
      <li><strong>Realistic Goals:</strong> Set achievable short-term and long-term objectives</li>
      <li><strong>Self-Compassion:</strong> Treat yourself with kindness when facing setbacks</li>
    </ol>
    
    <h3>Building Resilience</h3>
    <p>Resilience is your ability to bounce back from challenges. Develop resilience by maintaining perspective, building strong relationships, and practicing stress-reduction techniques regularly.</p>
  `,
  4: `
    <h2>छात्र जीवन में तनाव प्रबंधन</h2>
    <p>छात्र जीवन में तनाव एक आम समस्या है। पढ़ाई का बोझ, करियर की चिंता, और सामाजिक दबाव के कारण कई छात्र तनाव का सामना करते हैं।</p>
    
    <h3>तनाव के लक्षण</h3>
    <ul>
      <li>लगातार चिंता और बेचैनी</li>
      <li>नींद न आना या अधिक सोना</li>
      <li>भूख में कमी या अधिक खाना</li>
      <li>पढ़ाई में मन न लगना</li>
      <li>सिरदर्द और शारीरिक परेशानी</li>
    </ul>
    
    <h3>तनाव कम करने के उपाय</h3>
    <ol>
      <li><strong>समय प्रबंधन:</strong> दैनिक दिनचर्या बनाएं और उसका पालन करें</li>
      <li><strong>व्यायाम:</strong> रोजाना 30 मिनट शारीरिक गतिविधि करें</li>
      <li><strong>ध्यान और योग:</strong> मानसिक शांति के लिए ध्यान का अभ्यास करें</li>
      <li><strong>सामाजिक सहारा:</strong> दोस्तों और परिवार से बात करें</li>
      <li><strong>शौक:</strong> अपनी पसंदीदा गतिविधियों के लिए समय निकालें</li>
    </ol>
    
    <h3>कब लें पेशेवर मदद</h3>
    <p>यदि तनाव आपकी दैनिक गतिविधियों में बाधा डाल रहा है, तो तुरंत पेशेवर सहायता लें। हमारा प्लेटफॉर्म गुप्त परामर्श और मानसिक स्वास्थ्य जांच की सुविधा प्रदान करता है।</p>
  `,
}

export function ResourceCategories() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [articleModal, setArticleModal] = useState<{
    isOpen: boolean
    article: any
  }>({
    isOpen: false,
    article: null,
  })

  const openArticleModal = (article: any) => {
    const content = fullArticleContent[article.id as keyof typeof fullArticleContent]
    setArticleModal({
      isOpen: true,
      article: {
        ...article,
        content: content || "<p>Article content coming soon...</p>",
      },
    })
  }

  const openVideoPlayer = (videoId: number) => {
    alert(
      `Opening video player for video ${videoId}. In a real implementation, this would open a video player or navigate to a video streaming page.`,
    )
  }

  return (
    <div className="space-y-8">
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
                  <Button
                    className="w-full mt-4 bg-transparent"
                    variant="outline"
                    onClick={() => openArticleModal(article)}
                  >
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
                    <Button size="lg" className="rounded-full w-16 h-16" onClick={() => openVideoPlayer(video.id)}>
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
                  <Button className="w-full" onClick={() => openVideoPlayer(video.id)}>
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

      <ArticleModal
        isOpen={articleModal.isOpen}
        onClose={() => setArticleModal({ isOpen: false, article: null })}
        article={articleModal.article}
      />
    </div>
  )
}
