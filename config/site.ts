import { NavItem } from "@/types"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "iMark Infotech",
  description: "Unlock the secrets of any website",
  mainNav: [],
  links: {
    twitter: "https://github.com/imarkInfotech2020",
    github: "https://github.com/imarkInfotech2020/nextjs-doc-chat-ai",
  },
}
