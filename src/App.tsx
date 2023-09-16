import { BedIcon, FacebookIcon, InstagramIcon, TwitchIcon, TwitterIcon } from "lucide-react"
import { Screen } from "./components/common/Screen"
import { ArtistCardElement, ArtistCard } from "./components/ui/ArtistCard"

const artists: ArtistCardElement[] = [
  {
    artistName: 'ElRober',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      //si en dado caso en el json tenes un string, podes hacer un hashmap para devolver el icono como nodo icons: [twitter, instagram]
      // hashmap[twitter] => <TwitterIcon />
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElEdi',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElRober',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      //si en dado caso en el json tenes un string, podes hacer un hashmap para devolver el icono como nodo icons: [twitter, instagram]
      // hashmap[twitter] => <TwitterIcon />
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElEdi',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElRober',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      //si en dado caso en el json tenes un string, podes hacer un hashmap para devolver el icono como nodo icons: [twitter, instagram]
      // hashmap[twitter] => <TwitterIcon />
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElEdi',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElRober',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      //si en dado caso en el json tenes un string, podes hacer un hashmap para devolver el icono como nodo icons: [twitter, instagram]
      // hashmap[twitter] => <TwitterIcon />
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElEdi',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElRober',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      //si en dado caso en el json tenes un string, podes hacer un hashmap para devolver el icono como nodo icons: [twitter, instagram]
      // hashmap[twitter] => <TwitterIcon />
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
  {
    artistName: 'ElEdi',
    imageUrl: 'https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/302531879_406316854993045_8943438743950327839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=EzGhNy7KZWIAX-Kp_b1&_nc_ht=scontent.fsal2-1.fna&cb_e2o_trans=q&oh=00_AfCudeR1DaP7d38dDL7H86YPITPSrbp_eJxTgkTgtJtG5g&oe=65095E0E',
    icons: [
      <InstagramIcon />,
      <TwitterIcon />,
      <FacebookIcon />,
      <TwitchIcon />,
      <BedIcon />
    ]
  },
]

function App() {
  return (
    <>
      <Screen>
        <div className="grid-container">
         {
          artists.map((element, index) => {
            return (
              <ArtistCard
              key={index}
              icons={element.icons}
              artistName={element.artistName} imageUrl={element.imageUrl} />
            )
          })
         }
        </div>
      </Screen>
    </>
  )
}

export default App
