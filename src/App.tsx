import {useEffect, useState} from "react";
import axios from 'axios'
import MatchTracker from "./components/MatchTracker/MatchTracker.tsx";
import './App.css'
import Header from "./components/Header/Header.tsx";
import {useQuery, useQueryClient} from "react-query";


const App = () => {

    const queryClient = useQueryClient();

    async function fetchMatches() {
            const {data} = await axios.get('https://app.ftoyd.com/fronttemp-service/fronttemp')

            return data.data
    }

    const {isFetching, error, data} = useQuery('matches', fetchMatches, {
        refetchOnWindowFocus: false,
    })

    const refresh = () => {queryClient.refetchQueries(["matches"])}

    return (
        <div className="App">
            <Header refresh={refresh} error={error} isFetching={isFetching}/>
            <MatchTracker matches={data?.matches}/>
        </div>
    );
}

export default App
