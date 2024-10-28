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

export function BatchForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          style={{
            fontFamily: "poppins",
          }}
        >
          Add Course
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle
            style={{
              fontFamily: "poppins",
            }}
          >
            Add Course
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-3">
            <Label
              htmlFor="course"
              style={{
                fontFamily: "poppins",
              }}
            >
              Course
            </Label>
            <Input
              required
              id="course"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="duration"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Duration
            </Label>
            <Input
              id="duration"
              defaultValue=""
              className="col-span-3"
              required
            />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="description"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Description
            </Label>
            <Input
              id="description"
              defaultValue=""
              className="col-span-3"
              required
            />
          </div>
          <div className="grid gap-4">
            <Label
              htmlFor="status"
              className="mt-2"
              style={{
                fontFamily: "poppins",
              }}
            >
              Status
            </Label>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Active - Not-Active" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="active"
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    Active
                  </SelectItem>
                  <SelectItem
                    value="not-active"
                    style={{
                      fontFamily: "poppins",
                    }}
                  >
                    Not Active
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            style={{
              fontFamily: "poppins",
            }}
          >
            Add Course
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
