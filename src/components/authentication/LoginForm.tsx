"use client";
import React from "react";
import Button from "../Button";
import { poppins } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";
import { useRouter } from "next/navigation";
import "../../styles/loginForm.scss"; // Import the SCSS

export default function LoginForm() {
  const router = useRouter();

  return (
    <main className="login-form-main">
      <div className="container">
        <div className="login-form-layout">
          <div className="login-form-left-section">
            <Logo />
            <Image
              src="/login/pablo-sign.png"
              width={600}
              height={378}
              className="login-form-image-desktop"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/login/pablo-sign.png"
              width={600}
              height={378}
              className="login-form-image-mobile"
              alt="Screenshots of the dashboard project showing mobile version"
            />
          </div>

          <form className="login-form-section">
            <div className="flex-1">
              <h1 className={`${poppins.className} login-form-title`}>Welcome!</h1>
              <h1 className={`${poppins.className} login-form-subtitle`}>
                Enter details to login.
              </h1>

              <div className="login-form-input-group">
                <div className="login-form-input-container">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login-form-input-container" style={{ marginTop: "20px" }}>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    minLength={6}
                    aria-required
                  />
                  <h4>SHOW</h4>
                </div>
              </div>

              <Link href="/" className="login-form-forgot-password">
                FORGOT PASSWORD?
              </Link>

              <Button
                onClick={() => router.replace("/dashboard/users")}
                className="login-form-button"
              >
                <h1>Login</h1>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
