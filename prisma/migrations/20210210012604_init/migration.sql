-- CreateTable
CREATE TABLE "TestParent" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestChild" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "parentId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestParent.email_unique" ON "TestParent"("email");

-- AddForeignKey
ALTER TABLE "TestChild" ADD FOREIGN KEY ("parentId") REFERENCES "TestParent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
