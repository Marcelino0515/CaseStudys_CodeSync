import TeamMember from "@/app/components/TeamMember";
import CouterBlock from "../../components/CouterBlock";

export default function OurTeam() {
    return (
      <>
      <div className="container">
        <div className="mx-auto row gy-4">
          <TeamMember id="p1" img="Person" name="Person1" role="User" />
          <TeamMember id="p2" img="Person" name="Person2" role="Administrator" />
          <TeamMember id="p3" img="Person" name="Person3" role="Editor" />
        </div>
      </div>
      </>
    );
  }
  