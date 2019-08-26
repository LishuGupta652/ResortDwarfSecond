import React from 'react'
import RoomsFilter from "./RoomFilter"
import RoomsList from "./RoomList"
import { RoomConsumer } from "../context"
import Loading from "./Loading"

export default function RoomContainer() {
    return (
        <>

            <RoomConsumer>
                    {value => {
                        const {loading,sortedRooms,rooms} = value;
                        if(loading) {
                            return <Loading />
                        }
                        return (
                                <div>
                                    Hello From rooms Container
                                    <RoomsFilter />
                                    <RoomsList />
                                </div>
                        )
                    }}
            </RoomConsumer>
        
        </>
    )
}
