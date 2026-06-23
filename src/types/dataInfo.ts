interface langData {
  ua: string,
  en: string,
  de: string,
}

export interface newsInfo {
  id: number,
  date: string,
  category: string,
  title: langData,
  content: langData,
}

export interface eventsInfo {
  id: number,
  date: string,
  category: string,
  title: langData,
  content: langData,
  what_to_bring: langData,
}

export interface teamInfo {
  id: number,
  name: string,
  role: langData,
  bio: langData,
  photo_url: string,
}

export interface partnersInfo {
  id: number,
  name: string,
  description: langData,
  site_url: string,
  is_active_project: string,
}

export interface events {
  "news": newsInfo[],
  "events": eventsInfo[],
  "team": teamInfo[],
  "partners": partnersInfo[],
}
