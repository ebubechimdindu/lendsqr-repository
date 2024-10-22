const url = "https://run.mocky.io/v3/ae68f679-8e11-4e30-81dc-5ba72c0e9342";

export async function fetchUsers(){
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}