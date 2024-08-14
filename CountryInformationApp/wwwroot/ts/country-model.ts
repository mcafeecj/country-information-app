interface NativeName {
    official: string;
    common: string;
}

interface CountryName {
    common: string;
    official: string;
    nativeName: {
        [key: string]: NativeName;
    };
}

interface Flag {
    png: string;
    svg: string;
    alt: string;
}

interface Country {
    name: CountryName;
    capital: string[];
    region: string;
    subregion: string;
    population: number;
    flags: Flag;
    tld?: string[]; 
    cca2?: string; 
    cca3?: string;  
    ccn3?: string;
    cioc?: string;
    independent?: boolean; 
    status?: string;
    unMember?: boolean;
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    idd?: {
        root: string;
        suffixes: string[];
    }; 
    altSpellings?: string[];
    languages?: {
        [key: string]: string;
    }; 
    translations?: {
        [key: string]: {
            official: string;
            common: string;
        };
    }; 
    latlng?: [number, number];
    landlocked?: boolean;
    borders?: string[];
    area?: number;
    demonyms?: {
        [key: string]: {
            f: string;
            m: string;
        };
    };
    maps?: {
        googleMaps?: string;
        openStreetMaps?: string;
    }; 
    fifa?: string;
    car?: {
        signs: string[];
        side: string;
    };
    timezones?: string[];
    continents?: string[];
    coatOfArms?: {
        png: string;
        svg: string;
    };
    startOfWeek?: string;
    capitalInfo?: {
        latlng?: [number, number];
    };
}
