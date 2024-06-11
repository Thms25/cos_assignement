import React, { useState, useEffect } from 'react'

// Assets
import Info from '../../assets/svg/Info.svg'
import Completed from '../../assets/svg/quest_icons/completed.svg'
import cta from '../../assets/svg/quest_icons/cta.svg'
import Install from '../../assets/svg/quest_icons/Install.png'

// Styles
import '../../styles/Quests.scss'

// mock data
import QuestsData from '../../utils/data/quests.json'

// Components
import Card from '../layouts/Card'
import QuestCard from './QuestCard'

// Utils
import { getTitle, getSubtitle, getIcon } from '../../utils/quest-utils'

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

export default function Quests() {
  const [quests, setQuests] = useState<questObject[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function fetchQuests() {
      try {
        // This would be the actual API call
        // const response = await fetch('https://careeros.api/quests')
        // const data = await response.json()
        const { quests: quests_data } = QuestsData
        setQuests(quests_data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoaded(true)
      }
    }
    fetchQuests()
  }, [])

  return (
    <Card
      title="Quests"
      width="862.5px"
      height="471px"
      icon={Info}
      contentHeight="395px"
    >
      {loaded && quests.length ? (
        <div className="quests">
          {quests.map(quest => (
            <QuestCard
              key={quest.id}
              title={getTitle(
                quest.type,
                quest.contact,
                quest.job,
                quest.company,
              )}
              subtitle={getSubtitle(quest)}
              icon={getIcon(quest)}
              button={quest.type === 'install_extension' ? Install : cta}
              // button={cta}
            />
          ))}
          <QuestCard
            title="All Quests completed!"
            subtitle="You did it! Now, relax and wait for more..."
            icon={Completed}
          />
        </div>
      ) : (
        <div className="quests">
          <QuestCard
            title="All Quests completed!"
            subtitle="You did it! Now, relax and wait for more..."
            icon={Completed}
          />
        </div>
      )}
    </Card>
  )
}
