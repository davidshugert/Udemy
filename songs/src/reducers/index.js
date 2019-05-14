import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'You give love a bad name', duration: '1:45' },
        { title: 'Macarena', duration: '3:15' },
        { title: 'Scary Monsters and Nice Sprites', duration: '2:56' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})