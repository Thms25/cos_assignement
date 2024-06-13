// Styles
import '../../../styles/Cta.scss'

// Assets
import Visit from '../../../assets/svg/Visit.svg'
import Avatar from '../../layouts/Avatar'
import Card from '../../layouts/Card'

export default function Cta() {
  return (
    <Card height="862.5px" width="862.5px">
      <div className="cta">
        <Avatar
          src="https://s3-alpha-sig.figma.com/img/e11b/8367/ab4d88578bdc50fbfd21a5c136ab2173?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4bfNYV8MHMn08OUnbSb2DYKhgxBFt0G8tm9yQitos5Q3jQ5AuHuQKcMwj8~iRlOzkZOv6qqkcCiGKYbrTlSmNRRM8tNYYcjWK6iw6cImEew99XKCNkRmjku3X0rw7rsLImoufAUoAAqXP9pUjIH9gEG56WPo7x3cuNdccgAKDJrq0UypPaQaHuFP9KFQuVVh8lX7ZxEJ8QOYgDClwkqoeIgPuQ7qcpaJmcyIwlNFihCAZPgLDjqj7DhRnrpN-LniLaMVqfiZyeuwgwYTpj~OzaJTMUSnS3DF2My0tQQFuYa1Hql5hRzNzfCODo1dyhMPZhmGzLHqIL4kCfz5j7dvQ__"
          width="48px"
          height="48px"
        />
        <div className="cta-content">
          <h2>MBA Career Hub</h2>
          <p>Visit this channel for Internal Content & Communication</p>
        </div>
        <div className="cta-btn">
          <p>Visit now</p>
          <img src={Visit} alt="visit icon" />
        </div>
      </div>
    </Card>
  )
}
