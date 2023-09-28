const template = document.createElement('template');

/****
 * 
 * usage:    <eyas-match-container matchId="1019426462" prod="true" loadingText="Loading..." drawText="draw" winText="to win" layout="horizontal">No Matches currently avaliable</eyas-match-container>
 *
 ***/

template.innerHTML = `
    
    <div id ="match" >
    
    </div>
  `

class Match extends HTMLElement {

    affiliateId = "AN2548500601"

    // Do not edit anyething below this line
    nonProdUrl = "https://graphql.cts.kambicdn.com"
    prodUrl = "https://graphql.kambicdn.com"

    nonProdTarget = "https://lancebet-com-uat.eyasgaming.net/home"
    prodTarget = "https://www.lancebetting.com/home"

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.url = this.prod ? this.prodUrl : this.nonProdUrl;
        this.target = this.prod ? this.prodTarget : this.nonProdTarget;
    }


    // should be "true" or "false"
    get prod() {
        return this.getAttribute('prod') !== 'false';
    }

    connectedCallback() {
        this.getEvents(this.matchId);
    }

    getEvents() {
        const footballId = 1000093190;
        const data = JSON.stringify({
            query: `
            query Event {
                event (
                    offering: "eyasgamingbr"
                    market: "BR"
                    onlyMain: true
                    groupId: ${footballId}

                ) {
                    events {
                        id
                        name
                        englishName
                        start
                        betOffers {
                            id
                            betOfferType {
                                id
                                englishName
                                name
                            }
                            outcomes {
                                id
                                englishLabel
                                odds
                                criterion {
                                    type
                                    name
                                }
                                betOfferId
                                status
                                
                            }
                        }
                    }
                }
            }`
        });

        const response = fetch(
            this.url,
            {
                method: 'post',
                body: data,
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': data.length,
                    Authorization:
                        'eyas_gaming',
                },
            }
        ).then((response) => response.json())
            .then((data) => this.renderLeage(data.data.event.events))
            .catch((error) => this.$match.innerHTML = this.textContent);

    }

    renderLeage(events) {

        if (events == null || events.length == 0) {
            this.$match.innerHTML = this.textContent;
            return;
        }
        
        //Creating a list of all events ids
        const eventIds = events.map((event) => event.id);
        //Selecting a random event id
        const randomEventId = eventIds[Math.floor(Math.random() * eventIds.length)];
        //Selecting the event with the random id
        const selectedEvent = events.find((event) => event.id === randomEventId);
        console.log('Evento seleccionado:', selectedEvent);
        console.log('Id del evento:', selectedEvent.betOffers[0].id);

        //Replacing automatically the value of value bet-offer-id in eyas-match-container
        const miMatch = document.getElementById("miMatch");
        miMatch.setAttribute("bet-offer-id", selectedEvent.betOffers[0].id);

        //Creating a new one with the uptaded match
        const nuevoMatch = miMatch.cloneNode(true);
        miMatch.replaceWith(nuevoMatch);


    }


}

window.customElements.define('eyas-match', Match);