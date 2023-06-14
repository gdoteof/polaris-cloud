import { Stream } from '@cloudflare/stream-react'
import { useEffect, useState } from 'react'

const VideosPage = () => {
  const videoId = '5f22e591e55b4457b6edeaa8fba56f67'


  return (
	  <div>
	      <Stream controls src={videoId} />
	    </div>
  )
}

export default VideosPage

