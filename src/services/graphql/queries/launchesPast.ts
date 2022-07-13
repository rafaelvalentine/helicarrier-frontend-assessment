import gql from "graphql-tag"

export const QUERY_LAUNCHES_PAST = gql`
  query LaunchesPast($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        rocket_type
        # second_stage {
        # payloads {
        #   payload_type
        #   payload_mass_kg
        # }
        # }
      }
      ships {
        name
        home_port
        # image
      }
      id
      launch_success
      launch_year
    }
  }
`
