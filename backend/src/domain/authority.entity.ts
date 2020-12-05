import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryColumn } from "typeorm";

@Entity("authority")
export class Authority {
  @ApiProperty({ example: "ROLE_USER", description: "User role" })
  @PrimaryColumn()
  name: string;
}
