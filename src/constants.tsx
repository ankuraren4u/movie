import { IMenuItem, IDropdownItem } from "./interfaces"

export const API_BASE_URL: string = 'https://api.themoviedb.org'
export const API_KEY: string = "3a94078fb34b772a31d9a1348035bed7";
export const API_GENRE_URL = '/genre/tv/list';

export const MenuItems: IMenuItem[] = [{
    name: "Popular",
    url: "/popular"
},{
    name: "Trending",
    url: "/trending"
}, {
    name: "Newest",
    url: "/newest"
},{
    name: "Top Rated",
    url: "/top-rated"
}]

export const TypeDropdownList: IDropdownItem[] = [{
    name: "Movies",
    id: "movie"
},{
    name: "TV Shows",
    id: "tv"
}]

export const YearDropdownList: IDropdownItem[] = [];
let date = new Date(),
    year = date.getFullYear();

for (var i = year; i > year - 20 ; i--
    ) {
    YearDropdownList.push({
        name: i.toString(),
        id: i.toString()
    });   
}