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

const trainers = [
  {
    id: "trainer1",
    name: "Bilal Raza",
  },
  {
    id: "trainer2",
    name: "Shehzad Iqbal",
  },
  {
    id: "trainer3",
    name: "Ghous Ahmed",
  },
  {
    id: "trainer4",
    name: "Saad Ali",
  },
  {
    id: "trainer5",
    name: "Qasim Ali",
  },
];

const courses = [
  {
    id: "course1",
    name: "Web Development",
  },
  {
    id: "course2",
    name: "App Development",
  },
  {
    id: "course3",
    name: "Graphic Designing",
  },
  {
    id: "course4",
    name: "Python Programming",
  },
  {
    id: "course5",
    name: "Flutter Development",
  },
];

export function BatchForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          style={{
            fontFamily: "poppins",
          }}
        >
          Add Batch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle
            style={{
              fontFamily: "poppins",
            }}
          >
            Add Batch
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-3">
            <Label
              htmlFor="batchName"
              style={{
                fontFamily: "poppins",
                marginTop: "10px",
              }}
            >
              Batch Name
            </Label>
            <Input
              required
              id="batchName"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid gap-3">
            <Label
              htmlFor="trainer"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Trainer Name
            </Label>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Trainer...." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {trainers.map((trainerName) => {
                    return (
                      <SelectItem key={trainerName.id} value={trainerName.name}>
                        {trainerName.name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label
              htmlFor="courses"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Courses
            </Label>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Course...." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {courses.map((courseName) => {
                    return (
                      <SelectItem key={courseName.id} value={courseName.name}>
                        {courseName.name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label
              htmlFor="status"
              className="mt-2"
              style={{
                fontFamily: "poppins",
                marginTop: "10px",
              }}
            >
              Status
            </Label>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="pending, completed, Ongoing, merged" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="completed"
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    Completed
                  </SelectItem>
                  <SelectItem
                    value="merged"
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    Merged
                  </SelectItem>
                  <SelectItem
                    value="Ongoing"
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    Ongoing
                  </SelectItem>
                  <SelectItem
                    value="pending"
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    pending
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label
              htmlFor="noOfStudents"
              style={{
                fontFamily: "poppins",
                marginTop: "10px",
              }}
            >
              No. Of Students
            </Label>
            <Input
              required
              id="noOfStudents"
              defaultValue=""
              className="col-span-3"
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
            Add Batch
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
