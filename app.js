import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a className="a-logo" href="/">
    <img
      src="https://masaladarbar.in/wp-content/uploads/2023/03/cropped-Screenshot_2022-11-22-12-32-05-91_965bbf4d18d205f782c6b8409c5773a4-removebg-preview.png"
      className="logo"
      alt="Masala Darbar"
      decoding="async"
      sizes="(max-width: 633px) 100vw, 633px"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

data = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
      header: {
        title: "Top restaurant chains in Bangalore",
        action: {},
        headerStyling: {
          padding: {
            left: 16,
            top: 28,
            bottom: 18,
          },
        },
      },
      layout: {
        rows: 1,
        columns: 20,
        horizontalScrollEnabled: true,
        itemSpacing: 32,
        widgetPadding: {},
        containerStyle: {
          containerPadding: {
            left: 16,
            right: 12,
            bottom: 12,
          },
        },
        scrollBar: {
          scrollThumbColor: "#E46D47",
          scrollTrackColor: "#02060C",
          width: 54,
          height: 4,
          scrollStyling: {
            padding: {
              top: 6,
              bottom: 24,
            },
          },
        },
        widgetTheme: {
          defaultMode: {
            backgroundColour: "#1B3028",
            theme: "THEME_TYPE_DARK",
          },
          darkMode: {
            backgroundColour: "#1B3028",
            theme: "THEME_TYPE_DARK",
          },
        },
      },
      id: "top_brands_for_you",
      gridElements: {
        infoWithStyle: {
          "@type":
            "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
          restaurants: [
            {
              info: {
                id: "82991",
                name: "Domino's Pizza",
                cloudinaryImageId: "o08rel5uikguohfihbnm",
                locality: "Vidyanarayanapura",
                areaName: "New BEL Road",
                costForTwo: "₹400 for two",
                cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "82991",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 3300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 3300,
                },
                parentId: "2456",
                avgRatingString: "4.3",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 25,
                  serviceability: "SERVICEABLE",
                  slaString: "25 mins",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 02:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "30% OFF",
                  subHeader: "UPTO ₹75",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/dominos-pizza-vidyanarayanapura-new-bel-road-bangalore-82991",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "356931",
                name: "Pizza Hut",
                cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                locality: "New BEL Road",
                areaName: "Hmt Layout",
                costForTwo: "₹350 for two",
                cuisines: ["Pizzas"],
                avgRating: 4,
                feeDetails: {
                  restaurantId: "356931",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 3300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 3300,
                },
                parentId: "721",
                avgRatingString: "4.0",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 21,
                  lastMileTravel: 2.6,
                  serviceability: "SERVICEABLE",
                  slaString: "21 mins",
                  lastMileTravelString: "2.6 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/pizza-hut-new-bel-road-hmt-layout-bangalore-356931",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "336825",
                name: "Onesta",
                cloudinaryImageId: "pyoduyjmnhdnospuofel",
                locality: "New BEL Road",
                areaName: "New BEL Road",
                costForTwo: "₹200 for two",
                cuisines: [
                  "Italian",
                  "Desserts",
                  "Pizzas",
                  "American",
                  "Snacks",
                ],
                avgRating: 3.8,
                feeDetails: {
                  restaurantId: "336825",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 5300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 5300,
                },
                parentId: "11785",
                avgRatingString: "3.8",
                totalRatingsString: "5K+",
                sla: {
                  deliveryTime: 33,
                  lastMileTravel: 5.8,
                  serviceability: "SERVICEABLE",
                  slaString: "33 mins",
                  lastMileTravelString: "5.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 02:00:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "25% OFF",
                  subHeader: "ABOVE ₹800",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/onesta-new-bel-road-bangalore-336825",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "48580",
                name: "Leon's - Burgers & Wings (Leon Grill)",
                cloudinaryImageId: "snqnxshliwuloydxs4ps",
                locality: "80 Feet Road",
                areaName: "Sanjay Nagar",
                costForTwo: "₹600 for two",
                cuisines: [
                  "American",
                  "Snacks",
                  "Turkish",
                  "Portuguese",
                  "Continental",
                ],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "48580",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 6600,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 6600,
                },
                parentId: "371281",
                avgRatingString: "4.3",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 26,
                  lastMileTravel: 6.7,
                  serviceability: "SERVICEABLE",
                  slaString: "26 mins",
                  lastMileTravelString: "6.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 04:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "₹150 OFF",
                  subHeader: "ABOVE ₹449",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-80-feet-road-sanjay-nagar-bangalore-48580",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "3368",
                name: "Truffles",
                cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
                locality: "Ms Ramaiah Nagar",
                areaName: "New BEL Road",
                costForTwo: "₹450 for two",
                cuisines: ["American", "Desserts", "Italian", "Continental"],
                avgRating: 4.4,
                feeDetails: {
                  restaurantId: "3368",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 7100,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 7100,
                },
                parentId: "218065",
                avgRatingString: "4.4",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 33,
                  lastMileTravel: 6.1,
                  serviceability: "SERVICEABLE",
                  slaString: "33 mins",
                  lastMileTravelString: "6.1 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/truffles-ms-ramaiah-nagar-new-bel-road-bangalore-3368",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "416876",
                name: "KFC",
                cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
                locality: "Nanjappa Main Road",
                areaName: "New BEL Road",
                costForTwo: "₹400 for two",
                cuisines: [
                  "Burgers",
                  "Biryani",
                  "American",
                  "Snacks",
                  "Fast Food",
                ],
                avgRating: 4.1,
                feeDetails: {
                  restaurantId: "416876",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 5000,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 5000,
                },
                parentId: "547",
                avgRatingString: "4.1",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 21,
                  lastMileTravel: 3.6,
                  serviceability: "SERVICEABLE",
                  slaString: "21 mins",
                  lastMileTravelString: "3.6 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "20% OFF",
                  subHeader: "UPTO ₹50",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/kfc-nanjappa-main-road-new-bel-road-bangalore-416876",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "23699",
                name: "McDonald's",
                cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
                locality: "Ms Ramaiah Nagar",
                areaName: "New Bel Road",
                costForTwo: "₹400 for two",
                cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "23699",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 5300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 5300,
                },
                parentId: "630",
                avgRatingString: "4.3",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 5.8,
                  serviceability: "SERVICEABLE",
                  slaString: "27 mins",
                  lastMileTravelString: "5.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 01:00:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/mcdonalds-ms-ramaiah-nagar-new-bel-road-bangalore-23699",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "8032",
                name: "Burger King",
                cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                locality: "RMV 2nd Stage",
                areaName: "Sanjaynagar",
                costForTwo: "₹350 for two",
                cuisines: ["Burgers", "American"],
                avgRating: 4.1,
                feeDetails: {
                  restaurantId: "8032",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 5300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 5300,
                },
                parentId: "166",
                avgRatingString: "4.1",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 5.8,
                  serviceability: "SERVICEABLE",
                  slaString: "27 mins",
                  lastMileTravelString: "5.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 05:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "EVERY ITEM",
                  subHeader: "@ ₹129",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/burger-king-rmv-2nd-stage-sanjaynagar-bangalore-8032",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "9910",
                name: "Subway",
                cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
                locality: "MS Ramaiah Nagar",
                areaName: "New BEL Road",
                costForTwo: "₹350 for two",
                cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                avgRating: 4.2,
                feeDetails: {
                  restaurantId: "9910",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 6600,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 6600,
                },
                parentId: "2",
                avgRatingString: "4.2",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 6.1,
                  serviceability: "SERVICEABLE",
                  slaString: "27 mins",
                  lastMileTravelString: "6.1 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 01:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/subway-ms-ramaiah-nagar-new-bel-road-bangalore-9910",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "99658",
                name: "Beijing Bites",
                cloudinaryImageId: "zjhpzfpxla90qhfoqdrx",
                locality: "Vidyaranyapura",
                areaName: "Vidyaranyapura",
                costForTwo: "₹450 for two",
                cuisines: ["Chinese"],
                avgRating: 4.2,
                feeDetails: {
                  restaurantId: "99658",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 4800,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 4800,
                },
                parentId: "103",
                avgRatingString: "4.2",
                totalRatingsString: "5K+",
                sla: {
                  deliveryTime: 21,
                  lastMileTravel: 3.8,
                  serviceability: "SERVICEABLE",
                  slaString: "21 mins",
                  lastMileTravelString: "3.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:00:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/beijing-bites-vidyaranyapura-bangalore-99658",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "211887",
                name: "Baskin Robbins - Ice Cream Desserts",
                cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
                locality: "MGEHBS Layout",
                areaName: "New BEL Road",
                costForTwo: "₹250 for two",
                cuisines: ["Desserts"],
                avgRating: 4.2,
                veg: true,
                feeDetails: {
                  restaurantId: "211887",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 5300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 5300,
                },
                parentId: "5588",
                avgRatingString: "4.2",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 24,
                  lastMileTravel: 5.8,
                  serviceability: "SERVICEABLE",
                  slaString: "24 mins",
                  lastMileTravelString: "5.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 02:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "10% OFF",
                  subHeader: "ABOVE ₹1000",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-mgehbs-layout-new-bel-road-bangalore-211887",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "18974",
                name: "Nandhana Palace",
                cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
                locality: "Lower Parel",
                areaName: "Lower Parel",
                costForTwo: "₹500 for two",
                cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "18974",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 6000,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 6000,
                },
                parentId: "2120",
                avgRatingString: "4.3",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 28,
                  lastMileTravel: 5.7,
                  serviceability: "SERVICEABLE",
                  slaString: "28 mins",
                  lastMileTravelString: "5.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 01:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/nandhana-palace-lower-parel-bangalore-18974",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "27212",
                name: "Thalassery Restaurant",
                cloudinaryImageId: "jfwfzmajl59wpaphrkck",
                locality: "Mathikere",
                areaName: "Yeshwantpur",
                costForTwo: "₹300 for two",
                cuisines: [
                  "South Indian",
                  "Arabian",
                  "Chinese",
                  "Kerala",
                  "North Indian",
                ],
                avgRating: 4,
                feeDetails: {
                  restaurantId: "27212",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 5300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 5300,
                },
                parentId: "14391",
                avgRatingString: "4.0",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 25,
                  lastMileTravel: 5,
                  serviceability: "SERVICEABLE",
                  slaString: "25 mins",
                  lastMileTravelString: "5.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "20% OFF",
                  subHeader: "UPTO ₹50",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/thalassery-restaurant-mathikere-yeshwantpur-bangalore-27212",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "145082",
                name: "Polar Bear",
                cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
                locality: "Kalathur Layout",
                areaName: "Jalahalli",
                costForTwo: "₹400 for two",
                cuisines: ["Ice Cream", "Desserts"],
                avgRating: 4.5,
                veg: true,
                feeDetails: {
                  restaurantId: "145082",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 3800,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 3800,
                },
                parentId: "726",
                avgRatingString: "4.5",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 18,
                  lastMileTravel: 1.3,
                  serviceability: "SERVICEABLE",
                  slaString: "18 mins",
                  lastMileTravelString: "1.3 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/polar-bear-kalathur-layout-jalahalli-bangalore-145082",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "349822",
                name: "EatFit",
                cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
                locality: "Ms Ramaiah Rd",
                areaName: "Yeshwantpur",
                costForTwo: "₹270 for two",
                cuisines: [
                  "Chinese",
                  "Healthy Food",
                  "Tandoor",
                  "Pizzas",
                  "North Indian",
                  "Thalis",
                  "Biryani",
                ],
                avgRating: 4.1,
                feeDetails: {
                  restaurantId: "349822",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 4300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 4300,
                },
                parentId: "76139",
                avgRatingString: "4.1",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 25,
                  lastMileTravel: 4.7,
                  serviceability: "SERVICEABLE",
                  slaString: "25 mins",
                  lastMileTravelString: "4.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:59:00",
                  opened: true,
                },
                badges: {
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "brand",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "brand",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/eatfit-ms-ramaiah-rd-yeshwantpur-bangalore-349822",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "59418",
                name: "CakeZone",
                cloudinaryImageId: "2857960242f8d1d4d390dc22a38c530e",
                locality: "Geddalahalli",
                areaName: "AECS Layout",
                costForTwo: "₹200 for two",
                cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "59418",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 7300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 7300,
                },
                parentId: "7003",
                avgRatingString: "4.3",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 31,
                  lastMileTravel: 6.7,
                  serviceability: "SERVICEABLE",
                  slaString: "31 mins",
                  lastMileTravelString: "6.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "₹125 OFF",
                  subHeader: "ABOVE ₹299",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/cakezone-geddalahalli-aecs-layout-bangalore-59418",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "498298",
                name: "Istah - The Mediterranean Way",
                cloudinaryImageId: "67d4a416bf932f850b0a15ad33aae762",
                locality: "3rd Phase",
                areaName: "Yelahanka",
                costForTwo: "₹250 for two",
                cuisines: [
                  "Mediterranean",
                  "Snacks",
                  "Biryani",
                  "Grill",
                  "Kebabs",
                  "Arabian",
                  "Lebanese",
                  "Beverages",
                  "Desserts",
                  "Italian",
                  "Turkish",
                ],
                avgRating: 4.3,
                feeDetails: {
                  restaurantId: "498298",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 6600,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 6600,
                },
                parentId: "3518",
                avgRatingString: "4.3",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 6.3,
                  serviceability: "SERVICEABLE",
                  slaString: "27 mins",
                  lastMileTravelString: "6.3 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 00:30:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      description: "OnlyOnSwiggy",
                    },
                  ],
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "OnlyOnSwiggy",
                            imageId:
                              "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "60% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-3rd-phase-yelahanka-bangalore-498298",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "415216",
                name: "Taco Bell",
                cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
                locality: "Yelahanka",
                areaName: "Yelahanka",
                costForTwo: "₹300 for two",
                cuisines: ["Mexican"],
                avgRating: 4.1,
                feeDetails: {
                  restaurantId: "415216",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 9900,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 9900,
                },
                parentId: "1557",
                avgRatingString: "4.1",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 37,
                  lastMileTravel: 9.5,
                  serviceability: "SERVICEABLE",
                  slaString: "37 mins",
                  lastMileTravelString: "9.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 00:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/taco-bell-yelahanka-bangalore-415216",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "156421",
                name: "The Good Bowl",
                cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
                locality: "Devinagar",
                areaName: "Kodigehalli Main Rd",
                costForTwo: "₹400 for two",
                cuisines: [
                  "Biryani",
                  "North Indian",
                  "Pastas",
                  "Punjabi",
                  "Desserts",
                  "Beverages",
                ],
                avgRating: 4.1,
                feeDetails: {
                  restaurantId: "156421",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 5300,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 5300,
                },
                parentId: "7918",
                avgRatingString: "4.1",
                totalRatingsString: "1K+",
                sla: {
                  deliveryTime: 33,
                  lastMileTravel: 5,
                  serviceability: "SERVICEABLE",
                  slaString: "33 mins",
                  lastMileTravelString: "5.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-24 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/the-good-bowl-devinagar-kodigehalli-main-rd-bangalore-156421",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "75491",
                name: "California Burrito",
                cloudinaryImageId: "k7ulmih3cpibusssfjqz",
                locality: "Yelahanka",
                areaName: "Yelahanka",
                costForTwo: "₹250 for two",
                cuisines: [
                  "Mexican",
                  "American",
                  "Salads",
                  "Continental",
                  "Keto",
                  "Healthy Food",
                ],
                avgRating: 4.5,
                feeDetails: {
                  restaurantId: "75491",
                  fees: [
                    {
                      name: "BASE_DISTANCE",
                      fee: 7400,
                    },
                    {
                      name: "BASE_TIME",
                    },
                    {
                      name: "ANCILLARY_SURGE_FEE",
                    },
                  ],
                  totalFee: 7400,
                },
                parentId: "1252",
                avgRatingString: "4.5",
                totalRatingsString: "10K+",
                sla: {
                  deliveryTime: 27,
                  lastMileTravel: 7.9,
                  serviceability: "SERVICEABLE",
                  slaString: "27 mins",
                  lastMileTravelString: "7.9 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2023-10-25 01:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/restaurants/california-burrito-yelahanka-bangalore-75491",
                type: "WEBLINK",
              },
            },
          ],
        },
      },
    },
  },
};

const RestaurantCard = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-media">
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85"
          />

          <div className="discount">
            69% OFF<p>Up to ₹80</p>
          </div>
          <div className="pro-discount">PRO extra 15% OFF</div>
          <div className="delivery-time">39 mins</div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">Pizza Hut</p>
              <p className="place-speciality">Italian, Fast Food, Beverages</p>
            </div>
            <div className="place-review">
              <p className="rating">4.6 ★</p>
              <p className="per-person">₹200 per one</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
