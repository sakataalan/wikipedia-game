export interface WikiRandom {
    query: {
        random: [
        {
            id: number;
            title: string;
        }
    ]
  }
}

export interface WikiPage {
  pageid: number;
  title: string;
  fullurl: string;
}

export interface WikiPageResponse {
  batchcomplete: string;
  query: {
    pages: {
      // This is the index signature 👇
      [pageId: string]: WikiPage; 
    };
  };
}