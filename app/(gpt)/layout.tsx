interface ChatLayoutProps {
  children?: React.ReactNode
}

export default function ChatLayout({children}: ChatLayoutProps) {
  return (
    <section className="flex justify-center min-h-screen max-w-screen-md mx-auto">
      {children}
    </section>
  )
}