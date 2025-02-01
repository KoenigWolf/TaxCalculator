"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <div className="fixed top-4 right-4">
      {/* 設定アイコンでダイアログを開く */}
      <Dialog>
        <DialogTrigger asChild>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-gray-200 rounded-full shadow-md dark:bg-gray-800"
          >
            <Settings className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>テーマを選択</DialogTitle>
          </DialogHeader>
          <Card>
            <CardHeader>
              <p className="text-lg font-semibold text-center">テーマを選択してください</p>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="outline" onClick={() => setTheme("light")}>
                  ☀️ ライト
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="outline" onClick={() => setTheme("dark")}>
                  🌙 ダーク
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="outline" onClick={() => setTheme("system")}>
                  🖥️ システム
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}
