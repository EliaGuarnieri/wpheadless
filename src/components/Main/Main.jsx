const Main = ({ className, content }) => {
  return <main className={className} dangerouslySetInnerHTML={{__html: content}} />
}

export default Main