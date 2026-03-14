import { JSX } from "react";


export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  num: string;
  s: string;
  label: string;
}

export interface Skill {
  icon: string | JSX.Element;
  title: string;
  desc: string;
  tags: string[];
}

export interface Project {
  icon: string | JSX.Element;
  cat: string;
  badge: string;
  title: string;
  desc: string;
  stack: string[];
  view: string;
  bg: string;
}

export interface Service {
  n: string;
  title: string;
  desc: string;
  items: string[];
}

export interface Step {
  n: string;
  title: string;
  desc: string;
  dur: string;
  last?: boolean;
}

export interface Testimonial {
  i: string;
  g: string;
  stars: number;
  text: string;
  name: string;
  role: string;
}

export interface ContactLink {
  icon: string  | JSX.Element;
  label: string;
  val: string;
  href: string;
}

export interface FormData {
  fname: string;
  lname: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export interface ContactFormData {
  fname: string;
  lname: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}