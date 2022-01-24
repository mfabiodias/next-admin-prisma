import Layout from '../components/template/Layout'
import Title from '../components/template/Title'
import useAuth from '../data/hook/useAuth'

export default function Perfil() {
  const { user } = useAuth() 

  return (
    <Layout>
      <Title title='Perfil Title' subTitle="Perfil Subtitle"  />
      <br />
      {user ? 
        <div>
          <p>{`Name: ${user.name || 'Olá usuário'}`}</p>
          <p>{`Email: ${user.email}`}</p>
          <p>{`Type: ${user.type}`}</p>
        </div>
      : null }
    </Layout>
  )
}
