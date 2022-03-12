import type { NextPage } from 'next'
import { useEffect } from 'react'
import mapboxgl, { MapboxOptions } from 'mapbox-gl'
import styles from '../styles/Path.module.css'

const initOptions: MapboxOptions = {
  // token: only for public usage (URL restricted)
  accessToken: "pk.eyJ1Ijoic3cxMjI3IiwiYSI6ImNrbngyazRhcjBtY3Iyd3RnODhjbDhscWsifQ.6Uc-Lboqa0WhZbnnFJWFSA",
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/light-v10',
  localIdeographFontFamily: 'sans-serif',
  center: new mapboxgl.LngLat(139.744, 35.72),
  zoom: 16,
} as const

const Path: NextPage = () => {

  useEffect(() => {
    const map = new mapboxgl.Map(initOptions)
  }, [])

  return (
    <div id="mapbox" className={styles.mapbox}></div>
  )
}

export default Path
