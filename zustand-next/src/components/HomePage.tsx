"use client";

import axios from "../utils/axios";
import { useState } from "react";
import { Button } from "./ui/button";
import { useGetFromStore } from "@/hooks/zustandHooks";
import { useAuthStore } from "@/store/store";

const HomePage = () => {
  const token = useGetFromStore(useAuthStore, (state) => state.token);
  const setStoreToken = useAuthStore((state) => state.setToken);

  async function loginToken() {
    await axios
      .post(`/auth/login`, JSON.stringify({}))
      .then((res) => setStoreToken(res.data));
  }

  const [res, setRes] = useState();
  async function testJwt() {
    await axios
      .post(`/auth/test`, JSON.stringify({}))
      .then((res) => setRes(res.data))
      .catch((err) => setRes(err?.response?.data));
  }

  return (
    <div>
      <div className="mb-3">
        <p className="text-balance overflow-hidden truncate mb-3">{token}</p>
        <Button onClick={loginToken}>Get Token</Button>
      </div>
      <div>
        <p className="text-balance overflow-hidden truncate mb-3">{res}</p>
        <Button onClick={testJwt}>Test JWT</Button>
      </div>
    </div>
  );
};

export default HomePage;
