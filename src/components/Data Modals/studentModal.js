"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function StudentForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          style={{
            fontFamily: "poppins",
          }}
        >
          Add Student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle
            style={{
              fontFamily: "poppins",
            }}
          >
            Add Student
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-col-2 gap-3">
            <Label
              htmlFor="firstName"
              style={{
                fontFamily: "poppins",
              }}
            >
              First Name
            </Label>
            <Input
              required
              id="firstName"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="lastName"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Last Name
            </Label>
            <Input
              id="lastName"
              defaultValue=""
              className="col-span-3"
              required
            />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="education"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Education
            </Label>
            <Input
              id="education"
              defaultValue=""
              className="col-span-3"
              required
            />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="cnic"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              CNIC
            </Label>
            <Input id="cnic" defaultValue="" className="col-span-3" required />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="email"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Email
            </Label>
            <Input id="email" defaultValue="" className="col-span-3" required />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="address"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Address
            </Label>
            <Input
              id="address"
              defaultValue=""
              className="col-span-3"
              required
            />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="gender"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Gender
            </Label>
            <Input
              id="gender"
              defaultValue=""
              className="col-span-3"
              required
            />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="role"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Role
            </Label>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Role.... " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="trainer"
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    Trainer
                  </SelectItem>
                  <SelectItem
                    value="student"
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    Student
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="profilePicture"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Profile Picture
            </Label>
            <Input
              id="profilePicture"
              defaultValue=""
              className="col-span-3"
              type="file"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            style={{
              fontFamily: "poppins",
            }}
          >
            Add Student
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
