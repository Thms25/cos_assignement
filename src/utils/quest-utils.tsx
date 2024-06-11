import { format } from 'date-fns'

// icons
import download from '../assets/svg/quest_icons/download.svg'
import Submit from '../assets/svg/quest_icons/Submit.svg'
import Comment from '../assets/svg/quest_icons/Comment.svg'
import Save from '../assets/svg/quest_icons/Save.svg'
import Coffee from '../assets/svg/quest_icons/Coffee.svg'

// These functions are used to get the necessary title, subtitle, and icon for each quest

// ------------------------------------------

type questObject = {
  id: string
  user_id: string
  type: string
  status: string
  experience_points?: number
  due_date?: string
  company?: {
    id?: string
    name?: string
    logo_url?: string
    linkedin_url?: string
  } | null
  contact?: {
    id?: string
    name?: string
    first_name?: string
    last_name?: string
    profile_image?: string
    linkedin_url?: string
  } | null
  job: {
    id?: string
    title?: string
    company_logo?: string
  }
  created_at: string
}

export function getTitle(
  type: string,
  contact: any = null,
  job: any = null,
  company: any = null,
) {
  switch (type) {
    case 'install_extension':
      return 'Install the CareerOS Chrome Extension'
    case 'submit_application':
      return `Submit your application for ${job?.title}'s ${company?.name}`
    case 'resolve-comment':
      return 'Resolve a comment'
    case 'save_first_company':
      return 'Save your first company'
    case 'add_contact' || 'add_new_contact':
      return `Save a contact at ${contact?.first_name} ${contact?.last_name}`
    case 'send_linkedin_message':
      return `Send a LinkedIn message to ${contact?.first_name} ${contact?.last_name} at ${company?.name} `
    case 'send_linkedin_connection':
      return `Send a LinkedIn invitation to ${contact?.first_name} ${contact?.last_name} at ${company?.name} `
    case 'send_first_email':
      return `Send first email to ${contact?.first_name} ${contact?.last_name} at ${company?.name} `
    case 'schedule_coffee_chat':
      return `Schedule a coffee chat with ${contact?.first_name} ${contact?.last_name} at ${company?.name} `
    case 'send_follow_up_email':
      return `Send a follow-up email to ${contact?.first_name} ${contact?.last_name} at ${company?.name} `
    default:
      return type
  }
}

export function getSubtitle(quest: questObject) {
  switch (quest.type) {
    case 'install_extension':
      return 'Unlock the superpowers of CareerOS with our Chrome Extension. This plugin lets you save companies, contacts, and jobs from Linkedin and other job boards. It also lets you access our messaging template and send Linkedin messages directly from CareerOS.'
    case 'submit_application':
      return `Deadline: ${format(
        new Date(quest?.due_date || new Date()),
        'dd MMM yyyy',
      )}`
    case 'resolve-comment':
      return 'You have an unresolved comment from your Career Advisor.'
    case 'save_first_company':
      return 'Browse our company database for your favorite companies or new inspiration and save your first company to get started.'
    case 'add_contact' || 'add_new_contact':
      return `You recently saved ${quest.company?.name}. The next step is to now save a contact who’s working there to start networking with. `
    case 'send_linkedin_message':
      return "Send a customized LinkedIn message to reach out to your new contact. Don't worry! We'll help you with the wording."
    case 'send_linkedin_connection':
      return 'Send an invitation with a tailored message to your new contact. Our AI will help you!'
    case 'send_first_email':
      return `Send a first email to ${quest.contact?.first_name} ${quest.contact?.last_name} at [company] to get a conversation started.`
    case 'schedule_coffee_chat':
      return 'Get unique insights from your new contact by scheduling an informational interview with them. Make sure to use our coffee chat tips to prepare for your meeting.'
    case 'send_follow_up_email':
      return `Send a follow-up email to ${quest.contact?.first_name} ${quest.contact?.last_name}  at [company] to get a conversation started.`
    default:
      return quest.type
  }
}

export function getIcon(quest: questObject) {
  switch (quest.type) {
    case 'install_extension':
      return download
    case 'submit_application':
      return Submit
    case 'resolve-comment':
      return Comment
    case 'save_first_company':
      return Save
    case 'add_contact' || 'add_new_contact':
      return quest.company?.logo_url
    case 'send_linkedin_message':
      return quest.contact?.profile_image
    case 'send_linkedin_connection':
      return quest.contact?.profile_image
    case 'send_first_email':
      return quest.contact?.profile_image
    case 'schedule_coffee_chat':
      return Coffee
    case 'send_follow_up_email':
      return download
    default:
      return download
  }
}
